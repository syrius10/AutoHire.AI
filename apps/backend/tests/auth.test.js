import { request } from "express";
import app from "../server";

describe("RBAC Testing", () => {
    it("should allow HR to update workflow", async () => {
        const res = await request(app)
            .post("/api/workflow/update")
            .set("Authorization", "Bearer HR_TOKEN")
            .send({ workflow: ["Screening", "Offer", "Hired"] });
            
        expect(res.statusCode).toBe(200);
    });

    it("should deny access to regular users", async () => {
        const res = await request(app)
            .post("/api/workflow/update")
            .set("Authorization", "Bearer USER_TOKEN")
            .send({ workflow: ["Screening", "Offer", "Hired"] });

        expect(res.statusCode).toBe(403);
    });
});