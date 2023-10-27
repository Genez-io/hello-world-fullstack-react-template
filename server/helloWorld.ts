import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class HelloWorldService {

    hello(name: string): string {
        return `Hello, ${name}!`
    }
}

