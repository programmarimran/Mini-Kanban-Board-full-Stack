
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "your-secret-key";

// ---------------- JWT Login Controller ----------------
export const createJwtCookie = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ status: false, message: "Email is required" });
    }

    //  JWT token generate
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1d" });

    // Cookie set
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ status: true, message: "Login successful" });
  } catch (error) {
    console.error("JWT Cookie Error:", error);
    return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// ---------------- JWT Logout Controller ----------------
export const clearJwtCookie = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ status: true, message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
