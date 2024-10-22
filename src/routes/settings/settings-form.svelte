<script lang="ts">
  import { Textarea } from "$components/ui/textarea";
  import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Select from "$lib/components/ui/select";
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
  import { toast } from "svelte-sonner";
  import SuperDebug, {
    superForm,
    type Infer,
    type SuperValidated,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { formSchema, type FormSchema } from "./schema";

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
    },
  });

  const GoalType = [
    {
      id: "01",
      name: "Running",
      value: "Running",
    },
    {
      id: "02",
      name: "Reading",
      value: "Reading",
    },
    {
      id: "03",
      name: "Coding",
      value: "Coding",
    },
  ];

  const { form: formData, enhance } = form;

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let selectedDueDate: DateValue | undefined;
  let placeholder: DateValue = today(getLocalTimeZone());
  $: selectedDueDate = $formData.duedate
    ? parseDate($formData.duedate)
    : undefined;
  $: selectedGoalType = $formData.goaltype
    ? {
        label: $formData.goaltype,
        value: $formData.goaltype,
      }
    : undefined;
  $: selectedUnit = $formData.goalunit
    ? {
        label: $formData.goalunit,
        value: $formData.goalunit,
      }
    : undefined;
</script>

<SuperDebug data={$formData} />

<form method="POST" use:enhance>
  <Form.Field {form} name="goalname">
    <Form.Control let:attrs>
      <Form.Label>Goal Name *</Form.Label>
      <Input
        {...attrs}
        bind:value={$formData.goalname}
        placeholder="Goal Name"
      />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="duedate" class="flex flex-col">
    <Form.Control let:attrs>
      <Form.Label>Due Date *</Form.Label>
      <Popover.Root>
        <Popover.Trigger
          {...attrs}
          class={cn(
            buttonVariants({ variant: "outline" }),
            "w-[280px] justify-start pl-4 text-left font-normal",
            !selectedDueDate && "text-muted-foreground",
          )}
        >
          {selectedDueDate
            ? df.format(selectedDueDate.toDate(getLocalTimeZone()))
            : "DD/MM/YYYY"}
          <CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
        </Popover.Trigger>
        <Popover.Content class="w-auto p-0" side="top">
          <Calendar
            bind:value={selectedDueDate}
            bind:placeholder
            minValue={new CalendarDate(1900, 1, 1)}
            maxValue={today(getLocalTimeZone())}
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
  <Form.Field {form} name="goaltype">
    <Form.Control let:attrs>
      <Form.Label>Goal Type</Form.Label>
      <Select.Root
        selected={selectedGoalType}
        onSelectedChange={(v) => {
          v && ($formData.goaltype = v.value);
        }}
      >
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select Goal Type" />
        </Select.Trigger>
        <Select.Content>
          {#each GoalType as item}
            <Select.Item value={item.value} label={item.name} />
          {/each}
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.goaltype} name={attrs.name} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="goaltarget">
    <Form.Control let:attrs>
      <Form.Label>Goal Target *</Form.Label>
      <Input {...attrs} bind:value={$formData.goaltarget} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="goalcurrent">
    <Form.Control let:attrs>
      <Form.Label>Goal Current *</Form.Label>
      <Input {...attrs} bind:value={$formData.goalcurrent} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="goalunit">
    <Form.Control let:attrs>
      <Form.Label>Goal Unit</Form.Label>
      <Select.Root
        selected={selectedUnit}
        onSelectedChange={(v) => {
          v && ($formData.goalunit = v.value);
        }}
      >
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select unit for your goal" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="km" label="km" />
          <Select.Item value="book" label="book" />
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.goaltype} name={attrs.name} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="description">
    <Form.Control let:attrs>
      <Form.Label>Description</Form.Label>
      <Textarea
        {...attrs}
        placeholder="Your note here"
        class="resize-none"
        bind:value={$formData.description}
      />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Button type="submit">Submit</Button>
</form>
