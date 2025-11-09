import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2024 Vivek Kurmi. All rights reserved.
          </p>
          
            <Button 
              size="icon" 
              variant="ghost" 
              className="hover:text-primary transition-all"
              asChild
            >
              <a href="https://github.com/vivek-kurmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="hover:text-primary transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/vivek-kurmi-80a52b139" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="hover:text-primary transition-all"
              asChild
            >
              <a href="mailto:vivekdhanantar@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
