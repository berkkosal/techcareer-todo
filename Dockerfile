FROM openjdk:17
LABEL maintainer="kosalnberk@gmail.com"
COPY target/todo-0.0.1-SNAPSHOT.jar todo.jar
ENTRYPOINT ["java","-jar","/todo_techcareer.jar"]