// --- Helpers ---
import { SclPlaceholder } from '@silocitypages/ui-core';
// --- Types ---
import { GeneratorViewProps } from '@/types/GeneratorView';

function SimpleGeneratorView({
  isGenerating,
  title,
  titleClassName,
  value,
  valueClassName,
}: GeneratorViewProps) {
  return (
    <>
      <span className={`${titleClassName} fw-bolder fs-5`}> {title}:</span> <br />
      <span className={`${valueClassName} text-muted fs-6`}>
        <SclPlaceholder isLoading={isGenerating} value={value ?? ''} />
      </span>
    </>
  );
}

export default SimpleGeneratorView;
