const skills = [
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Spring Boot", icon: "devicon-spring-boot-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Apache Kafka", icon: "devicon-apachekafka-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" }
];

const msTags = [
    "Saga Pattern", "Outbox Pattern", "Kafka", "Grafana", 
    "Loki", "Promtail", "Spring Cloud", "Eureka", "API Gateway"
];

const monoTags = [
    "Spring Data JPA", "Spring MVC","Spring Security", "PostgreSQL", "BCrypt"
];

document.addEventListener("DOMContentLoaded", () => {
    const skillGrid = document.getElementById("skills-grid");
    
    // iconos
    skills.forEach(s => {
        const div = document.createElement("div");
        div.className = "skill-tag";
        div.innerHTML = `<i class="${s.icon}"></i><span>${s.name}</span>`;
        skillGrid.appendChild(div);
    });

    // tags de proyectos
    const fillTags = (id, list) => {
        const el = document.getElementById(id);
        if (el) {
            list.forEach(t => {
                const span = document.createElement("span");
                span.textContent = t;
                el.appendChild(span);
            });
        }
    };

    fillTags("tags-ms", msTags);
    fillTags("tags-mono", monoTags);
});