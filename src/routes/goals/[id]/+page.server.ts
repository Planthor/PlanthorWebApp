import { goalDB, goalId, goalSchema } from "$components/goals";
import { error, fail, redirect } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "../$types";

const crudSchema = goalSchema.extend({
  goalId: goalSchema.shape.goalId.optional()
});

export const load: PageServerLoad = async ({ params }: any) => {

  const goal = goalDB.find((goal) => goal.goalId === params.id);
  if (params.id && !goal && params.id !== 'create') throw error(404, "Goal not found.")

  return {
    form: await superValidate(goal, zod(crudSchema)),
    goalDB
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    const form = await superValidate(formData, zod(crudSchema));

    if (!form.valid) {
      return fail(400, { form })
    }

    if (!form.data.goalId) {
      const goal = { ...form.data, goalId: goalId() }
      goalDB.push(goal)
      return message(form, "Goal created");
    } else {
      const index = goalDB.findIndex((goal) => goal.goalId === form.data.goalId);
      if (index == -1) throw error(404, "Goal not found.")

      if (formData.has("delete")) {
        goalDB.splice(index, 1)
        throw redirect(303, '/goals')
      } else {
        goalDB[index] = { ...form.data, goalId: form.data.goalId }
        return message(form, "Goal updated.")
      }
    }
  }
}