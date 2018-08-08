import { Server } from "../server";

test("Server is defined", () => {
	expect(Server).toBeDefined();
});

test("Server can be new'd", () => {
	expect(new Server()).toBeInstanceOf(Server);
});
