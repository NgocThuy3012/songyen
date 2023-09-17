export interface ICSelectModalRef {
  open: () => void;
}

export interface ICSelectModalProps {
  value: string;
  onChange?: (value: string) => void;
}
