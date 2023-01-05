import { ManagementClient } from "auth0";

function main() {
  const auth0 = new ManagementClient({
    domain: "_____",
    clientId: "_____",
    clientSecret: "_____",
  });
  auth0.getClients().then(console.log);
}

main();
