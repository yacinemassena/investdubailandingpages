import { homepageConfig } from '../config';

const lang = 'en';
const problem = homepageConfig.problem[lang];

export const Problem = () => {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {problem.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-wide">
            {problem.title}
          </h2>
          <p className="text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed tracking-wide">
            {problem.subtitle}<br />
            {problem.subtitleLine2}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-brand-border shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-brand-accent/10">
                  <th className="text-left py-5 px-6 text-xs font-bold uppercase tracking-wider text-brand-muted">Investment</th>
                  <th className="text-left py-5 px-6 text-xs font-bold uppercase tracking-wider text-brand-muted">Typical Return</th>
                  <th className="text-left py-5 px-6 text-xs font-bold uppercase tracking-wider text-brand-muted">Timeline</th>
                  <th className="text-left py-5 px-6 text-xs font-bold uppercase tracking-wider text-brand-muted">The Catch</th>
                </tr>
              </thead>
              <tbody>
                {problem.comparison.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`border-t border-brand-border transition-colors ${
                      row.highlight 
                        ? 'bg-brand-accent text-white' 
                        : 'hover:bg-brand-surface/30'
                    }`}
                  >
                    <td className={`py-5 px-6 ${row.highlight ? 'text-white font-bold' : 'text-brand-dark font-semibold'}`}>
                      {row.investment}
                    </td>
                    <td className={`py-5 px-6 ${row.highlight ? 'text-white font-bold' : 'text-brand-dark font-bold'} text-lg`}>
                      {row.returns}
                    </td>
                    <td className={`py-5 px-6 ${row.highlight ? 'text-white font-bold' : 'text-brand-muted'}`}>
                      {row.timeline}
                    </td>
                    <td className={`py-5 px-6 ${row.highlight ? 'text-white font-bold' : 'text-brand-muted'}`}>
                      {row.catch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-lg text-brand-dark font-medium max-w-2xl mx-auto">
          {problem.transition}
        </p>
      </div>
    </section>
  );
};
