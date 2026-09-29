import { SynthAudio } from "./audio/synth-audio.js";
import { OmniVisionEngine } from "./engine/engine.js";
import { OmniVisionView } from "./ui/view.js";

window.addEventListener("DOMContentLoaded", () => {
    const synth = new SynthAudio();
    const engine = new OmniVisionEngine();
    const container = document.getElementById("studio-app-container");
    const view = new OmniVisionView(container, engine, synth);
    view.render();

    const panel = container.querySelector(".studio-panel");
    if (panel) {
        panel.classList.add("active");
        panel.style.display = "block";
    }
});
