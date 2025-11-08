import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL"],
    },
    {
      title: "Frameworks",
      skills: ["LangChain", "LangGraph", "CrewAI", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "FastAPI"],
    },
    {
      title: "Tools",
      skills: ["Power BI", "Azure", "AWS Bedrock", "AWS Lambda", "SQL Server", "Docker", "Git", "MCP"],
    },
    {
      title: "Platforms",
      skills: ["Visual Studio", "Jupyter Notebook", "PyCharm", "Putty", "VS Code", "Colab"],
    },
    {
      title: "Model Serving",
      skills: ["VLLM", "Triton Inference Server", "HuggingFace Transformers", "Ollama"],
    },
    {
      title: "Soft Skills",
      skills: ["Collaboration", "Innovation", "Decision-Making", "Problem-Solving", "Technical Communication"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="skills">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
