import Route from "@ioc:Adonis/Core/Route";

Route.resource("todo", "TodosController").apiOnly();
