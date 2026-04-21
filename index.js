function printMadeBySms() {
  console.groupCollapsed(
    "%c✨ Made by Shoghi Simon ✨",
    "color: #09f; font-family: 'Ubuntu Mono', monospace; font-size: 16px; background: #000; padding: 4px; border-radius: 4px;",
  );
  console.log(
    `%c\
           ███████╗███████╗██╗     ███████╗          
           ██╔════╝██╔════╝██║     ██╔════╝          
           ███████╗█████╗  ██║     █████╗            
           ╚════██║██╔══╝  ██║     ██╔══╝            
           ███████║███████╗███████╗██║               
           ╚══════╝╚══════╝╚══════╝╚═╝               
%c\
         ███╗   ███╗ █████╗ ██████╗ ███████╗         
         ████╗ ████║██╔══██╗██╔══██╗██╔════╝         
         ██╔████╔██║███████║██║  ██║█████╗           
         ██║╚██╔╝██║██╔══██║██║  ██║██╔══╝           
         ██║ ╚═╝ ██║██║  ██║██████╔╝███████╗         
         ╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝         
%c\
███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝`,
    "color: #4af; font-family: monospace; font-size: 12px;",
    "color: #0cf; font-family: monospace; font-size: 12px;",
    "color: #09f; font-family: monospace; font-size: 12px;",
  );
  console.log(
    "%c🌐 GitHub: https://github.com/SelfMadeSystem",
    "color: #4af; font-family: 'Ubuntu Mono', monospace; font-size: 14px",
  );
  console.log(
    "%c🌍 Website: https://shoghisimon.ca",
    "color: #4af; font-family: 'Ubuntu Mono', monospace; font-size: 14px",
  );
  console.log(
    "%c🚀 (I had fun making this)",
    "color: #4f9; font-family: 'Ubuntu Mono', monospace; font-size: 14px",
  );
  console.groupEnd();
}

if ("document" in globalThis) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", printMadeBySms);
  } else {
    printMadeBySms();
  }
}
