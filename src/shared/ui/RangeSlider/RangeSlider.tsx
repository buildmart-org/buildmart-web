import * as Slider from '@radix-ui/react-slider';
import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
  min: number;
  max: number;
  labelFrom?: string;
  labelTo?: string;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export const RangeSlider = (props: RangeSliderProps) => {
  const {
    min,
    max,
    labelFrom = '',
    labelTo = '',
    step = 1,
    value,
    onChange,
  } = props;

  return (
    <div className={styles.wrapper}>
      <Slider.Root
        className={styles.root}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onChange}
      >
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>

        <Slider.Thumb className={styles.thumb} />
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>

      {/* LABELS */}
      <div className={styles.labels}>
        <span className={styles.label}>{labelFrom}</span>
        <span className={styles.label}>{labelTo}</span>
      </div>
    </div>
  );
};
