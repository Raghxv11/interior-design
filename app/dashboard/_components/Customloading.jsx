import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";

const Customloading = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Please wait while we are processing your request.
      </AlertDescription>
    </Alert>
  )
}

export default Customloading;
