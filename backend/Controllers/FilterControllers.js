const DashBoard = require("../Schemas/FilterSchema");
//to fetch all the data
const GetAllTheData = async (req, res) => {
  try {
    const {
      end_year,
      topic,
      sector,
      region,
      country,
      pestle,
      source,
      intensity,
      likelihood,
    } = req.query;
    const obj = {};

    if (end_year) {
      obj.end_year = end_year;
    }

    if (topic) {
      obj.topic = topic;
    }

    if (sector) {
      obj.sector = sector;
    }

    if (region) {
      obj.region = region;
    }
    if (country) {
      obj.country = country;
    }

    if (pestle) {
      obj.pestle = pestle;
    }

    if (source) {
      obj.source = source;
    }

    if (intensity) {
      obj.intensity = intensity;
    }
    if (likelihood) {
      obj.likelihood = likelihood;
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
