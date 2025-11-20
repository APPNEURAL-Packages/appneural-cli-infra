import { logger, withTelemetry } from "@appneural/cli-shared";
export function registerInfraCommands(program) {
    program
        .command("infra")
        .description("APPNEURAL infrastructure helpers")
        .action(() => withTelemetry("infra", async () => {
        logger.info("APPNEURAL infrastructure command placeholder");
    }));
}
//# sourceMappingURL=infra.js.map