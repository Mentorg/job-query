type JobContainerProps = {
  title: string;
  content?: string;
};

function JobContainer({ title, content }: JobContainerProps) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-12">
        <div className="col-start-1 col-end-3">
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div className="col-start-3 col-end-12 mt-2 lg:m-0">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default JobContainer;
