import { PostMortemSection as PostMortemSectionType } from "@/data/projects/types";
import HighlightedText from "./HighlightedText";

interface PostMortemSectionProps {
  section: PostMortemSectionType;
}

const PostMortemSection = ({ section }: PostMortemSectionProps) => {
  return (
    <div className="mt-12 mb-8">
      <div className="bg-primary/60 rounded-md px-4 py-3 mb-6">
        <h3 className="font-display text-lg font-semibold text-foreground text-center">
          {section.title || "Post-Mortem"}
        </h3>
      </div>
      
      <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
        {/* Insights section */}
        {section.insights && (
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-2">Insights</h4>
            <p>
              <HighlightedText text={section.insights.text} highlights={section.insights.highlights} />
            </p>
          </div>
        )}
        
        {/* What Went Well section */}
        {section.whatWentWell && section.whatWentWell.length > 0 && (
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-2">What Went Well</h4>
            <ul className="list-disc list-inside space-y-1">
              {section.whatWentWell.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* What I Learned section */}
        {section.whatILearned && (
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-2">What I Learned</h4>
            <p className="mb-2">{section.whatILearned.intro}</p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              {section.whatILearned.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {section.whatILearned.conclusion && (
              <p>{section.whatILearned.conclusion}</p>
            )}
          </div>
        )}
        
        {/* Original paragraphs (for backward compatibility) */}
        {section.paragraphs && section.paragraphs.map((p, index) => (
          <p key={index}>
            <HighlightedText text={p.text} highlights={p.highlights} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostMortemSection;
