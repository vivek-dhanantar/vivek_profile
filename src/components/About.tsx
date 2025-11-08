import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
    },
    {
      icon: Sparkles,
      title: "Modern Tech",
      description: "Using cutting-edge technologies and frameworks",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Data Scientist at Tech Mahindra with hands-on experience in developing multi-agent AI systems, 
              LLM-based automation, and data-driven solutions. I have led projects for clients like Cisco and Google, 
              leveraging frameworks such as LangChain, LangGraph, CrewAI, and pgvector-based RAG to enhance accuracy, 
              scalability, and automation efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans machine learning, deep learning, model serving (VLLM, Triton, HuggingFace), and cloud 
              platforms including AWS and Azure. I have also engineered AI guardrails, built LLM companions with memory, 
              and fine-tuned Vision Transformer models achieving 99% accuracy in real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With certifications in AWS Cloud and AI Practitioner, and a strong foundation in Python, SQL, and FastAPI, 
              I'm passionate about building secure, intelligent, and scalable AI solutions. Recognized with the Tech Mahindra 
              Star Award and Bravo Award, I thrive on innovation and collaborative problem-solving.
            </p>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
