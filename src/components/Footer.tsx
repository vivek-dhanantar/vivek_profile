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
          
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="hover:text-primary transition-all">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-all">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:text-primary transition-all">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
