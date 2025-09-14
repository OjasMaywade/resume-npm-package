const resume = require("./resume.json")
const color = require("./color")

const printheader = (title)=>{
    console.log(`${color.bold}\n ---- ${title} ---- \n ${color.reset}`);
};

const printLine = (label, value)=>{
    console.log(`${color.fg.red}${label}: ${color.reset}${value} `)
};

const printSection = (title, items)=>{
  console.log(`\n${color.underscore}${color.fg.magenta}${title}${color.reset}`);
  items.forEach(item => console.log(`  - ${color.fg.green}${item}${color.reset}`));
}

printheader("Resume");
printLine("Name",resume.name)
printLine("Role",resume.role)
printLine("Location",resume.location)
printLine("Email:",resume.email);
printLine("LinkedIn",resume.linkedin)
printLine("GitHub",resume.github)

printSection("Experience", resume.experience)
printSection("Education", resume.education)
printSection('Projects', resume.projects)
printSection("Skills", resume.skills)

