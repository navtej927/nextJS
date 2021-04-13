import { render, screen } from "@testing-library/react";
import Profile from './index';

describe("About", ()=>{
    it("Should be defined", ()=>{
        render(<Profile />)
        expect(screen.getByTestId("profile")).toBeInTheDocument();
        expect(screen.getByTestId("profile")).toBe("sds");
    });
});