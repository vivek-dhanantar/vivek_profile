import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Tech Mahindra",
      period: "July 2023 - Present",
      description: "Led development of multi-agent AI solutions for Cisco, automating corporate hierarchy mapping using LangChain, LangGraph, Serper.dev, Google Search, Crawl4AI, and pgvector-based RAG. Improved data accuracy by 90%, reduced processing time by 80%, and cut manual effort by 75%.",
      highlights: [
        "Delivered synthetic data generation pipelines for Google using Azure OpenAI LLM and LangChain agents",
        "Built robust Guardrails system using RoBERTa based model to enhance LLM security",
        "Developed AI companion with memory using LangMem, LangGraph and PostgreSQL",
        "Engineered high-performance inference server using VLLM with Phi-2 and Meditron-7B models",
        "Fine-tuned Vision Transformer model for rail track damage detection achieving 99% accuracy"
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Decision Point Pvt. Ltd",
      period: "July 2022 - August 2022",
      description: "Contributed to Microsoft's Purview R&D project by implementing unified data governance solution using Azure Purview and Data Factory for data lineage.",
      highlights: [
        "Collected, cleaned, and transformed 30+ macroeconomic datasets using Databricks with Python",
        "Built interactive Power BI dashboards to support data-driven insights and decision-making"
      ]
    },
  ];

  const education = [
    {
      degree: "Master of Technology",
      institution: "Indian Institute of Technology, Roorkee",
      period: "June 2021 - May 2023",
      description: "CGPA: 9.079",
    },
    {
      degree: "Bachelor of Technology",
      institution: "Maulana Azad National Institute of Technology, Bhopal",
      period: "July 2016 - May 2020",
      description: "CGPA: 7.030",
    },
    {
      degree: "Class XII",
      institution: "Govt Boys H S School Deori, Sagar, M.P.",
      period: "July 2014 - April 2015",
      description: "Percentage: 91.60%",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background" id="experience">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            </div>
            
            <div className="space-y-6 ml-12">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <span className="text-accent font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6 ml-12">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-l-4 border-l-secondary"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-accent font-medium">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
