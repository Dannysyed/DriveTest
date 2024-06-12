const User = require("../models/User");

module.exports = async (req, res) => {
  try {
    const LicenseNumber = req.body.LicenseNumber;
    const newCarDetails = {
      make: req.body["CarDetails.make"],
      model: req.body["CarDetails.model"],
      year: req.body["CarDetails.year"],
      platNumber: req.body["CarDetails.platNumber"],
    };

    console.log("Received new car details:", newCarDetails);

    const user = await User.findOne({ LicenseNumber });

    if (!user) {
      console.log("User not found with LicenseNumber:", LicenseNumber);
      return res.render("g_page", { user: undefined });
    }

    console.log("User found:", user);

    // Update CarDetails
    user.CarDetails = newCarDetails;

    // Debugging the update before saving
    console.log("Updated user object before saving:", user);

    await user.save();

    console.log("User details updated successfully.");

    return res.redirect("/g");
  } catch (error) {
    console.error("Error updating car details:", error);
    return res
      .status(500)
      .send("An error occurred while updating car details.");
  }
};
