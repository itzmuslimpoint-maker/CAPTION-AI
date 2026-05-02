export function formatTime(sec: number): string {
  const date = new Date(sec * 1000);
  return date.toISOString().substring(11, 23).replace(".", ",");
}

export interface Segment {
  start: number;
  end: number;
  text: string;
}

export function generateSRT(segments: Segment[]): string {
  let srt = "";

  segments.forEach((seg, i) => {
    srt += `${i + 1}\n`;
    srt += `${formatTime(seg.start)} --> ${formatTime(seg.end)}\n`;
    srt += `${seg.text.trim()}\n\n`;
  });

  return srt;
}
