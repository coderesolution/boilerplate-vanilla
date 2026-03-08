import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// GSAP plugins
// gsap.registerPlugin(SplitText);

// Component CSS is loaded via @import in styles.css (avoids FOUC). Add new components there.

// Auto-import all component JS (glob: components folder), run in sorted order.
const componentScripts = import.meta.glob("./components/*/*.js");
for (const path of Object.keys(componentScripts).sort()) {
    await componentScripts[path]();
}

const everyPageLoad = async () => {
    const lenis = new Lenis({
        autoRaf: true,
        anchors: true,
    });

    // Scroll event passes the Lenis instance (see https://github.com/darkroomengineering/lenis)
    lenis.on("scroll", (e) => {
        console.log("scroll", e.scroll);
    });
};

// Check if page has already loaded, if not then wait for DOMContentLoaded event
if (document.readyState === "complete") {
    everyPageLoad();
} else {
    document.addEventListener("DOMContentLoaded", () => {
        everyPageLoad();
    });
}
