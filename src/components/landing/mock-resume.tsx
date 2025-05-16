import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function MockResume() {
  return (
    <Card className="w-full max-w-[6in] aspect-[8.5/11] bg-white relative p-6 font-sans 
      before:absolute before:inset-0 before:bg-[radial-gradient(#00000005_1px,transparent_1px)] before:bg-[size:16px_16px] before:opacity-70
      [box-shadow:0_2px_8px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.1)]
      rounded-none border-[0.5px] border-gray-200/50">
      {/* Header - Centered */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Kushagra Juneja</h2>
        <p className="text-gray-600 text-sm mb-2">Full Stack Developer</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="w-2.5 h-2.5" />
            <span>kushagrajuneja7@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-2.5 h-2.5" />
            <span>New Delhi, India</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-2.5 h-2.5" />
            <span>github.com/ku28</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-2.5 h-2.5" />
            <span>linkedin.com/in/kush-juneja</span>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-4">
        <h3 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wider border-b border-gray-200 pb-1">Technical Skills</h3>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">Languages: TypeScript, Python, JavaScript</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">Frontend: React, Next.js, TailwindCSS, Material-UI</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">Backend: Node.js, Express, FastAPI</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">Cloud: AWS (S3, Lambda, EC2), Vercel</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">AI/ML: TensorFlow, Hugging Face, LangChain</Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-[10px] py-0">Databases: PostgreSQL, MongoDB</Badge>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h3 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wider border-b border-gray-200 pb-1">Professional Experience</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="text-[11px] font-semibold text-gray-800">Full Stack Developer</h4>
              <p className="text-[10px] text-gray-600">May 2021 - Present</p>
            </div>
            <p className="text-[10px] font-medium text-gray-700 mb-0.5">New Delhi, India</p>
            <ul className="text-[10px] text-gray-600 list-disc list-outside ml-3 space-y-0.5">
              <li>Developed and maintained key features for legal practice management platform using React and TypeScript</li>
              <li>Implemented AI-powered document analysis feature reducing manual review time by 60%</li>
              <li>Optimized API performance resulting in 30% faster page load times</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-0.5">
              <h4 className="text-[11px] font-semibold text-gray-800">Junior Developer</h4>
              <p className="text-[10px] text-gray-600">Jun 2019 - Apr 2021</p>
            </div>
            <p className="text-[10px] font-medium text-gray-700 mb-0.5">New Delhi, India</p>
            <ul className="text-[10px] text-gray-600 list-disc list-outside ml-3 space-y-0.5">
              <li>Built responsive dashboard components using React and Redux</li>
              <li>Collaborated on social media analytics features serving 100K+ users</li>
              <li>Participated in agile development process and code reviews</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h3 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wider border-b border-gray-200 pb-1">Projects</h3>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="text-[11px] font-semibold text-gray-800">AI Meeting Assistant</h4>
              <p className="text-[10px] text-gray-600">github.com/ku28/prepai</p>
            </div>
            <ul className="text-[10px] text-gray-600 list-disc list-outside ml-3 space-y-0.5">
              <li>Built meeting summarization tool using OpenAI API, Next.js, and TypeScript</li>
              <li>Implemented real-time transcription and key points extraction</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="text-[11px] font-semibold text-gray-800">Housing Market Analyzer</h4>
              <p className="text-[10px] text-gray-600">github.com/ku28/housage</p>
            </div>
            <ul className="text-[10px] text-gray-600 list-disc list-outside ml-3 space-y-0.5">
              <li>Created web scraper and analysis tool for real estate listings</li>
              <li>Built interactive dashboard using Next.js, TailwindCSS, and Chart.js</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wider border-b border-gray-200 pb-1">Education</h3>
        <div>
          <div className="flex justify-between items-baseline mb-0.5">
            <h4 className="text-[11px] font-semibold text-gray-800">BE. Computer Science</h4>
            <p className="text-[10px] text-gray-600">2026</p>
          </div>
          <p className="text-[10px] text-gray-600">Chitkara University, Rajpura, Punjab</p>
          <p className="text-[10px] text-gray-600 mt-0.5">Focus: Software Engineering and Machine Learning</p>
        </div>
      </div>
    </Card>
  );
} 