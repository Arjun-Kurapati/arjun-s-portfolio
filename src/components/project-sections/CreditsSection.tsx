import { CreditsSection as CreditsSectionType } from "@/data/projects/types";
interface CreditsSectionProps {
  section: CreditsSectionType;
}
const CreditsSection = ({
  section
}: CreditsSectionProps) => {
  return <div className="mt-12 mb-8">
      <div className="bg-primary/60 rounded-md px-4 py-3 mb-6">
        <h3 className="font-display text-lg font-semibold text-foreground text-center">
          {section.title || "Credits"}
        </h3>
      </div>
      
      
    </div>;
};
export default CreditsSection;