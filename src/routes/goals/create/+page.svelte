<script lang="ts">
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Select from "$lib/components/ui/select";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import { DateFormatter, type DateValue } from "@internationalized/date";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { cn } from "$lib/utils.js";
  import { getLocalTimeZone } from "@internationalized/date";

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let value: DateValue | undefined = undefined;
  const capitalizeFirstLetter = (values: string) => {
    return values.charAt(0).toUpperCase() + values.slice(1);
  };
</script>

<div class="mx-auto w-[50%] pt-8 gap-4 flex flex-col">
  <div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label for="goal-name">Goal name</Label>
    <Input type="text" id="goal-name" />
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label for="due-date">Goal types</Label>
    <Select.Root>
      <Select.Trigger class="w-[180px]">
        <Select.Value placeholder="Type" />
      </Select.Trigger>
      <Select.Content>
        {#each ["running", "reading", "coding"] as item}
          <Select.Item value={item}>{capitalizeFirstLetter(item)}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label for="due-date">Due date</Label>
    <Popover.Root>
      <Popover.Trigger asChild let:builder>
        <Button
          variant="outline"
          class={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
          builders={[builder]}
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
        </Button>
      </Popover.Trigger>
      <Popover.Content class="w-auto p-0">
        <Calendar bind:value initialFocus />
      </Popover.Content>
    </Popover.Root>
  </div>
  <div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label for="descriptions">Descriptions</Label>
    <Textarea placeholder="Type your message here." id="descriptions" />
  </div>
</div>
