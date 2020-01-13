exports.seed = async knex => {
  await knex("projects_resources").insert([
    { project_Id: 1, resource_Id: 3 },
    { project_Id: 2, resource_Id: 2 },
    { project_Id: 3, resource_Id: 1 }
  ]);
};
