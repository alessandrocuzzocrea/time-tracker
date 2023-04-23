import { derived } from 'svelte/store';
import { TimeEntryDerivedStore } from '$lib/stores/TimeEntryDerivedStore';

export const TimeEntryByDayDerivedStore = derived(TimeEntryDerivedStore, ($TimeEntryStore) => {
  return $TimeEntryStore
    .reduce((acc, entry) => {
      const date = new Date(entry.startTime).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });
      const group = acc.find((g) => g.date === date);
      if (group) {
        group.entries.push(entry);
        group.totalDuration += entry.endTime - entry.startTime;
      } else {
        acc.push({ date, entries: [entry], totalDuration: entry.endTime - entry.startTime });
      }
      return acc;
    }, [])
    .map((group) => {
      group.entries.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      return group;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});
