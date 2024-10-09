<script lang="ts">
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { cn } from "$lib/utils.js";
  import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
    parseDate,
    today,
    type DateValue,
  } from "@internationalized/date";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import SuperDebug, {
    superForm,
    type Infer,
    type SuperValidated,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { formSchema, type FormSchema } from "./schema";
  import { toast } from "svelte-sonner";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    taintedMessage: null,
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
      } else {
        toast.error("Please fix the errors in the form.");
      }
    }
  });

  const { form: formData, enhance } = form;

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let value: DateValue | undefined;
  $: value = $formData.duedate ? parseDate($formData.duedate) : undefined;
  let placeholder: DateValue = today(getLocalTimeZone());
</script>

<SuperDebug data={$formData} />

<form method="POST" use:enhance>
  <Form.Field {form} name="goalname">
    <Form.Control let:attrs>
      <Form.Label>Goal Name *</Form.Label>
      <Input {...attrs} bind:value={$formData.goalname} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="duedate" class="flex flex-col">
    <Form.Control let:attrs>
      <Form.Label>Due date *</Form.Label>
      <Popover.Root>
        <Popover.Trigger
          {...attrs}
          class={cn(
            buttonVariants({ variant: "outline" }),
            "w-[280px] justify-start pl-4 text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
          <CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
        </Popover.Trigger>
        <Popover.Content class="w-auto p-0" side="top">
          <Calendar
            {value}
            bind:placeholder
            minValue={new CalendarDate(1900, 1, 1)}
            maxValue={today(getLocalTimeZone())}
            calendarLabel="Date of birth"
            initialFocus
            onValueChange={(v) => {
              if (v) {
                $formData.duedate = v.toString();
              } else {
                $formData.duedate = "";
              }
            }}
          />
        </Popover.Content>
      </Popover.Root>
      <Form.FieldErrors />
      <input hidden value={$formData.duedate} name={attrs.name} />
    </Form.Control>
  </Form.Field>
  <Button type="submit">Submit</Button>
</form>
