import { Command } from "commander";
import { registerInfraCommands } from "./commands/infra.js";

export default function register(program: Command): void {
  registerInfraCommands(program);
}
