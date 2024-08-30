const { options } = require("./router");
const DashBoard = require("./Schema");

//to fetch all the data
const GetAllTheData = async (req, res) => {
  try {
    const { end_year, topic, sector, region, country, pestle, source } =
      req.query;
    const obj = {};

    if (end_year) {
      obj.end_year = end_year;
    }

    if (topic) {
      obj.topic = { $regex: topic, $options: "i" };
    }

    if (sector) {
      obj.sector = { $regex: sector, $options: "i" };
    }

    if (region) {
      obj.region = region;
    }
    if (country) {
      obj.country = { $regex: country, options: "i" };
    }

    if (pestle) {
      obj.pestle = { $regex: pestle, options: "i" };
    }

    if (source) {
      obj.source = { $regex: source, options: "i" };
    }

    const data = await DashBoard.find(obj);
    res
      .status(200)
      .json({ message: "All the data fetched", success: true, data });
  } catch (error) {
    res.status(500).json({ message: "error fetching data", success: false });
  }
};

module.exports = {
  GetAllTheData,
};
