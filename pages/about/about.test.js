import { render, screen, waitFor } from "@testing-library/react";
import About from './index';

describe("About", ()=>{
    it("Should be defined", ()=>{
        render(<About />)
        waitFor(()=>{});
        expect(screen.getByTestId("about")).toBeInTheDocument();
    });
});