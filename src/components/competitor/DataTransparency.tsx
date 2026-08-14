export interface DataTransparencyProps {
  sourcesCount?: string;
  confidence?: string;
  updatedText?: string;
}

export function DataTransparency({
  sourcesCount = '18 sources collected',
  confidence = 'High confidence',
  updatedText = 'Updated just now',
}: DataTransparencyProps) {
  return (
    <section className="data-transparency">
      <div className="dt-header">
        <p className="eyebrow small">Data transparency</p>
        <h3>How this was collected</h3>
      </div>
      <div className="dt-body">
        <p>
          All metrics are derived from publicly observable digital signals — social profiles, website traffic estimators,
          search indexes, and ad libraries. Values marked as estimates reflect ranges, not precise counts. &quot;Not
          detected&quot; means no publicly observable evidence was found, not that the company does not advertise. The
          authority proxy is a composite of backlinks, indexed pages, and page speed — it is not an official Google score.
        </p>
        <div className="dt-meta">
          <span>{sourcesCount}</span>
          <span>{confidence}</span>
          <span>{updatedText}</span>
        </div>
      </div>
    </section>
  );
}
