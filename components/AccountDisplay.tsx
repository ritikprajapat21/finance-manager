import { User } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const AccountDisplay = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                }),
                "h-9 w-9 p-2 border",
              )}
            >
              <User className="h-9 w-9" />
              <span className="sr-only">Ritik Prajapat</span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">Ritik Prajapat</TooltipContent>
        </Tooltip>
      ) : (
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
            }),
            "justify-start",
          )}
        >
          <User className="mr-2 h-4 w-4" />
          <div className="leading-4">
            <p> Ritik Prajapat</p>
            <p>ritikprajapati084@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDisplay;
