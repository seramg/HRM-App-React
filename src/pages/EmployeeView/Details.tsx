const DetailsSection = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="detail common-flex">
      <div className="heading common-flex">
        <span className="material-symbols-outlined ">{icon}</span>
        <p className="title">{title}</p>
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export default DetailsSection;
