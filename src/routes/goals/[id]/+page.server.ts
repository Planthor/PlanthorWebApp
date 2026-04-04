import { goalDB, goalId, crudSchema, type Goal } from "$lib/goals";
import { error, fail, redirect } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const goal = goalDB.find((g) => g.goalId === params.id);
  
  if (params.id && !goal && params.id !== 'create') {
    throw error(404, "Goal not found.");
  }

  return {
    form: await superValidate(goal, zod(crudSchema)),
    goalDB
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(crudSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { goalId: id } = form.data;

    if (!id) {
      // Create new goal
      const newGoal = { ...form.data, goalId: goalId() };
      goalDB.push(newGoal as Goal); // Use proper type
      return message(form, "Goal created");
    } else {
      const index = goalDB.findIndex((g) => g.goalId === id);
      if (index === -1) {
        throw error(404, "Goal not found.");
      }

      if (formData.has("delete")) {
        goalDB.splice(index, 1);
        throw redirect(303, '/goals');
      } else {
        goalDB[index] = { ...form.data, goalId: id } as Goal;
        return message(form, "Goal updated.");
      }
    }
  }
};
