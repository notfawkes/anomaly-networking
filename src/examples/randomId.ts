export interface NetworkElement {
  id: string;
  label: string;
}

export interface NetworkElementType {
  type: string;
  label: string;
}

export function getNetworkElement(type: string): NetworkElement {
  const element = NETWORK_ELEMENTS.find(el => el.type === type);
  if (!element) throw new Error(`Network element type '${type}' not found`);
  const id = Math.random().toString(36).substring(2, 8);
  return {
    id: `${element.type}_${id}`,
    label: element.label
  };
}

export const NETWORK_ELEMENTS: NetworkElementType[] = [
  { type: 'db', label: 'Database Server' },
  { type: 'router', label: 'Router' },
  { type: 'modem', label: 'Modem' },
  { type: 'laptop', label: 'Laptop' },
  { type: 'firewall', label: 'Firewall' },
  { type: 'switch', label: 'Network Switch' },
  { type: 'fs', label: 'File Server' },
  { type: 'ap', label: 'Access Point' },
  { type: 'pc', label: 'Desktop PC' },
  { type: 'printer', label: 'Network Printer' },
  { type: 'server', label: 'Application Server' },
  { type: 'cloud', label: 'Cloud Service' },
  { type: 'gateway', label: 'Gateway' },
  { type: 'hub', label: 'Network Hub' },
  { type: 'nas', label: 'Network Storage' }
]
