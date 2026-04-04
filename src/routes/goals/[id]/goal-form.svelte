<script lang="ts">
  import { goto } from "$app/navigation";
  import { Textarea } from "$components/ui/textarea/index.js";
  import { Button, buttonVariants } from "$components/ui/button/index.js";
  import { Calendar } from "$components/ui/calendar/index.js";
  import * as Form from "$components/ui/form/index.js";
  import { Input } from "$components/ui/input/index.js";
  import * as Popover from "$components/ui/popover/index.js";
  import * as Select from "$components/ui/select/index.js";
  import { cn } from "$lib/utils.js";
  import { GOAL_TYPES, GOAL_UNITS } from "$lib/constants";
  import {
    CalendarDate,
    DateFormatter,
    getLocalTimeZone,
    parseDate,
    type DateValue,
  } from "@internationalized/date";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import { toast } from "svelte-sonner";
  import { superForm } from "sveltekit-superforms";

  export let data;

  const form = superForm(data, {
    resetForm: true,
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        toast.success(`Goal ${$formData.goalId ? "updated" : "created"} successfully!`);
      } else {
        toast.error("Please fix the errors in the form.");
      }
    },
  });

  const { form: formData, enhance } = form;

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let selectedDueDate: DateValue | undefined;

  $: selectedDueDate = $formData.duedate ? parseDate($formData.duedate) : undefined;
  $: selectedGoalType = $formData.goaltype ? { label: $formData.goaltype, value: $formData.goaltype } : undefined;
  $: selectedUnit = $formData.goalunit ? { label: $formData.goalunit, value: $formData.goalunit } : undefined;
</script>

<form method="POST" use:enhance class="flex flex-col gap-4">
  <input type="hidden" name="goalId" bind:value={$formData.goalId} />
  
  <Form.Field {form} name="goalname">
    <Form.Control let:attrs>
      <Form.Label>Goal Name *</Form.Label>
      <Input {...attrs} bind:value={$formData.goalname} placeholder="Goal Name" />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Form.Field {form} name="duedate" class="flex flex-col">
      <Form.Control let:attrs>
        <Form.Label>Due Date *</Form.Label>
        <Popover.Root>
          <Popover.Trigger
            {...attrs}
            class={cn(
              buttonVariants({ variant: "outline" }),
              "w-full justify-start text-left font-normal",
              !selectedDueDate && "text-muted-foreground",
            )}
          >
            {selectedDueDate ? df.format(selectedDueDate.toDate(getLocalTimeZone())) : "DD/MM/YYYY"}
            <CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
          </Popover.Trigger>
          <Popover.Content class="w-auto p-0" side="top">
            <Calendar
              bind:value={selectedDueDate}
              minValue={new CalendarDate(1900, 1, 1)}
              initialFocus
              onValueChange={(v) => {
                $formData.duedate = v ? v.toString() : "";
              }}
            />
          </Popover.Content>
        </Popover.Root>
        <input hidden value={$formData.duedate} name={attrs.name} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="goaltype" class="flex flex-col">
      <Form.Control let:attrs>
        <Form.Label>Goal Type</Form.Label>
        <Select.Root
          selected={selectedGoalType}
          onSelectedChange={(v) => { v && ($formData.goaltype = v.value); }}
        >
          <Select.Trigger {...attrs}>
            <Select.Value placeholder="Select Goal Type" />
          </Select.Trigger>
          <Select.Content>
            {#each GOAL_TYPES as item}
              <Select.Item value={item.value} label={item.name} />
            {/each}
          </Select.Content>
        </Select.Root>
        <input hidden bind:value={$formData.goaltype} name={attrs.name} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <Form.Label>Goal Unit *</Form.Label>
        <Select.Root
          selected={selectedUnit}
          onSelectedChange={(v) => { v && ($formData.goalunit = v.value); }}
        >
          <Select.Trigger {...attrs}>
            <Select.Value placeholder="Select Unit" />
          </Select.Trigger>
          <Select.Content>
            {#each GOAL_UNITS as unit}
              <Select.Item value={unit} label={unit} />
            {/each}
          </Select.Content>
        </Select.Root>
        <input hidden bind:value={$formData.goalunit} name={attrs.name} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

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

  <div class="flex flex-col sm:flex-row justify-end gap-2 pt-4">
    <Button variant="secondary" on:click={() => goto("/goals")}>Back</Button>
    {#if $formData.goalId}
      <Button
        type="submit"
        name="delete"
        variant="destructive"
        on:click={(e) => !confirm("Are you sure you want to delete this goal?") && e.preventDefault()}
      >
        Delete
      </Button>
    {/if}
    <Button type="submit">
      {$formData.goalId ? "Update Goal" : "Create Goal"}
    </Button>
  </div>
</form>
