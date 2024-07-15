const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <h1 className="text-4xl font-semibold text-center">
          Welcome Abu Raihan
        </h1>

        <div className="flex justify-center mt-4">
          <img
            className="rounded-full w-[300px] h-[300px] object-cover"
            src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
