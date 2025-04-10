import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { LanguageModelV1 } from 'ai';

export type ApiKey = {
  service: string;
  key: string;
  addedAt: string;
};

export type AIConfig = {
  model: string;
  apiKeys: Array<ApiKey>;
};

/**
 * Initializes an AI client based on the provided configuration
 * Falls back to default OpenAI configuration if no config is provided
 */
export function initializeAIClient(config?: AIConfig) {

  // Existing logic for free users
  if (!config) {
    return createOpenAI({ apiKey: '' })('no-model') as LanguageModelV1;
  }

  const { model, apiKeys } = config;

  if (model.startsWith('gemini')) {
    const googleKey = apiKeys.find(k => k.service === 'google')?.key || process.env.GEMINI_API_KEY;
    if (!googleKey) throw new Error('Google API key not found');
    return createGoogleGenerativeAI({ apiKey: googleKey })(model) as LanguageModelV1;
  }
  const openaiKey = apiKeys.find(k => k.service === 'openai')?.key;
  if (!openaiKey) throw new Error('OpenAI API key not found');
  return createOpenAI({ apiKey: openaiKey })(model) as LanguageModelV1;
}
