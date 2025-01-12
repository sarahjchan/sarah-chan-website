import React from "react";
import "./Projects.css";
import logo_bb from "./gifs/Ball-Bot2.gif";
import logo_kf from "./gifs/kf.gif"
import logo_kf2 from "./gifs/kf2.gif"
import logo_pf from "./gifs/pf.gif"

const Projects = () => {
  return (
    <div className="container">
      <section id="about"></section>
      <h1 className="header">ABOUT ME</h1>
      <div className="content">
        <div classname="image-grid">
          <img src="images/about.jpg" alt="hi" className="title-image"/>
        </div>
        <div className="text-container">
          <p>Welcome!</p><br></br>
          
          <p>My name is Sarah. I was born and raised in the San Francisco Bay Area. 
          I've been fascinated with robots since I joined an FRC robotics team in 
          high school, so it's been a long-time passion of mine.</p><br></br>
          
          <p>In college, I developed an interest in software development for robotics. 
          Two of my favorite classes were "SLAM & Navigation" and "Algorithmic Robotics." 
          Over the past two years, I was fortunate to work on two internship projects that I really enjoyed.</p><br></br>
          
          <p>Scroll down to learn more about me!</p><br></br>

        </div>
      </div>
      <section id="projects"></section>
      <h1 className="header">PROJECTS</h1>

      <h2 className="header-content">Autonomous Construction Vehicle Used to Navigate Minefields (Summer Internship)</h2>
      <div className="content">
        <div className="image-grid">
          <div className="image-wrapper">
            <img src="images/cerl1.png" alt="hi" className="image"/>
            <figcaption class="caption">Map from camera in Foxglove Bridge (L) based on what the cameras sees (R).</figcaption>
          </div>
          <div className="image-wrapper">
            <img src="images/cerl2.png" alt="hi" className="image"/>
            <figcaption class="caption">The map the robot made, visualized in RViz2 (L) based on a simulated environment in Gazebo (R).</figcaption>
          </div>
        </div>
        <div className="text-container">
          <p>The overall goal of this summer intern project was to modify a compact track loader (CTL) so that it could navigate a minefield autonomously. Before I arrived, the only way to drive the CTL was to use a human driver.</p><br></br>

          <p>For this project, I integrated NVIDIA Isaac ROS SLAM packages with the vehicle so that it could drive on its own. Here's a breakdown of some of the tasks I performed:</p>
          <ul>
          <li>Configured NVIDIA Isaac ROS SLAM and packages to work with the CTL.</li>
          <li>Configured the Nav2 (Navigation 2) stack to command the robot to plan a path and drive autonomously.</li>
          <li>Created launch files in ROS 2 to run simulations in Gazebo and Foxglove Bridge.</li>
          <li>Wrote a URDF file (including TF trees) of the robot, including the physics behind every component of the robot so that the simulation could show how the robot would move realistically.</li>
          <li>Wrote all the launch files to test mapping, localization, and navigation in different combinations, both separately and together to ensure success in every possible scenario.</li>
          <li>Wrote all the launch files to run it on a stereo camera attached to a cart to visualize its mapping and localization in RViz and Foxglove Bridge when pushing the cart around the lab.</li>
          <li>Added the files to the physical vehicle (CTL). We couldn't test the code because the hardware components weren't ready before my internship ended.</li>
          <li>Wrote and presented a poster.</li>
          </ul>
        </div>
      </div>

      <h2 className="header-content">Motion Sickness Response to a Tilting Seat System  (Summer Research)</h2>
      <div className="content">
        <div className="image-grid">
          <div className="image-wrapper">
            <img src="images/psdl-1.png" alt="hi" className="image"/>
            <figcaption class="caption">Representative data for tilting seat system tilt trajectory and lateral acceleration of the vehicle for a left turn.</figcaption>
          </div>
          {/* <div className="image-wrapper">
            <img src="images/psdl-2.png" alt="hi" className="image"/>
            <figcaption class="caption">NEED CAP</figcaption>
          </div> */}
          <div className="image-wrapper">
            <img src="images/psdl-3.png" alt="hi" className="image"/>
            <figcaption class="caption">Mean motion sickness scores across 29 study participants.</figcaption>
          </div>
        </div>
        <div className="text-container">
          <p>The overall goal of this study was to evaluate whether a tilting seat system helps to mitigate car sickness. As a summer intern, my goal was to 
            conduct human subject experiments to study motion sickness responses using a modified test vehicle equipped with an active seat system capable of 
            tipping and tilting. The research focused on vehicle and passenger kinematics and physiological data analysis in a closed test track environment.</p><br></br>
          <p>Some of the tasks that I performed include the following:</p>
          <ul>
          <li>Guided human subjects through the research process while conducting the trials and collecting data.</li>
          <li>Deployed sensors and electronics to measure vehicle and passenger kinematics and physiological responses.</li>
          <li>Analyzed the consistency of vehicle motion during research trials to validate repeatability.</li>
          <li>Wrote the kinematics section of the lab's user guide for the tilting seat used in the study.</li>
          <li>Used linear mixed models to run statistical analyses of motion sickness scores reported by subjects.</li>
          <li>Calculated the seat's position based on the angular position of the motors and plotted the filtered outcome against the predicted seat position.</li>
          </ul>
        </div>
      </div>

      <h2 className="header-content">Escape Challenge: Self-Navigating Robot</h2>
      <div className="content">
        <div className="image-grid-horizontal">
          <div className="image-wrapper">
            <img src="images/slam-1.png" alt="hi" className="image"/>
            <figcaption class="caption">
              Robot mapping and localization. The white area is what the robot mapped 
              to be free space. The black lines represent the obstacles (in this case, 
              walls). The red directional arrow is based on the robot's guess as to 
              where it's pointing and heading toward.</figcaption>
          </div>
          <div className="image-wrapper">
            <img src="images/slam-2.png" alt="hi" className="image"/>
            <figcaption class="caption">
            Obstacle distance grid. The red area represents free space, the blue 
            area represents the area where the center of the robot cannot drive 
            without colliding with an obstacle, and the pink area represents the obstacle.
            </figcaption>
          </div>
          <div className="image-wrapper">
            <img src="images/slam-3.png" alt="hi" className="image"/>
            <figcaption class="caption">
              Planned path with pruning. The green line represents the path planned using the A* algorithm.
            </figcaption>
          </div>
        </div>
        <div className="text-container">
          <p>The goal of this project was to apply SLAM and autonomous navigation to an MBot so that it could autonomously drive around in a maze, map areas, and escape the maze.</p><br></br>
          <p>Working in a team of four, I partnered with one teammate to focus on the mapping and navigation aspects.</p><br></br>
          <p>To start, we calibrated the motor encoders to ensure accurate odometry readings, and tuned turning and straight PID controllers for motion control. With the data we 
            collected from the MBot's LiDAR, we used Bresenham's line algorithm to create a map of the areas the LiDAR could detect. We created an occupancy grid to use with our 
            navigation algorithm, making sure to account for inflated occupancy. We implemented the A* algorithm for path planning and navigation. Finally, we used our mapping and 
            navigation algorithms to find undiscovered areas, plan paths to those frontiers, and drive toward those areas to develop more of the map.</p><br></br>
          <p>For testing, we used ROS bags with sensor data collected from another MBot to successfully simulate our mapping and localization algorithms. We then applied the code 
            to the physical MBot and were able to map the area. Due to mechanical issues with the robot, localization was a challenge, so we tuned the motion controller until we reached our project deadline.</p><br></br>
          <p>We used ROS 2 to manage our code in Python and C++, and GitLab for version control.</p>
        </div>
      </div>

      <h2 className="header-content">Localization Project</h2>
      <div className="content">
        <div className="image-grid">
          <div className="image-wrapper">
            <img src={logo_kf} alt="hi" className="image"/>
            <figcaption class="caption">Demonstration 1: Kalman filter on an asymmetrical map. The predicted state of the robot (green line) tracks closely to the ground truth (blue line).</figcaption>
          </div>
          <div className="image-wrapper">
            <img src={logo_kf2} alt="hi" className="image"/>
            <figcaption class="caption">Demonstration 2: Kalman filter on a symmetrical map. The predicted state of the robot (green line) does not track closely with the ground truth (blue line) due to a multimodal sensor model caused by symmetry.</figcaption>
          </div>
          <div className="image-wrapper">
            <img src={logo_pf} alt="hi" className="image"/>
            <figcaption class="caption">Demonstration 3: Particle filter on a symmetrical map. The predicted state of the robot, represented by the densest clusters of particles, converges to the robot's true location.</figcaption>
        </div>
      </div>
        <div className="text-container">
            <p>The goal of this project was to dive deeper into localization by comparing the Kalman Filter with the Particle Filter on a simulated PyBullet robot to determine how the two algorithms 
            performed in different environments. I programmed both algorithms in Python.<br></br><br></br>

            The experiments I conducted demonstrated the strengths and limitations of both the Kalman filter and Particle filter in various localization scenarios.<br></br><br></br>

            In the first demonstration, the Kalman filter performed well in localizing the robot on a map with little symmetry. The Kalman filter predicted state tracking pretty close to the actual 
            robot's path. This highlights the Kalman filter's effectiveness in environments with distinguishable features.<br></br><br></br>

            In the second demonstration, the Kalman filter was used again, but in a highly symmetrical environment. This time, the Kalman filter struggled to accurately track the robot. In the environment, 
            the pillars were symmetrical along the x- and y-axes. The wall in the center was also centered on the y-axis, but the doorway was slightly off center. The lack of symmetry at the doorway explains 
            why the green line tracked a little closer to the center wall when the robot passed the doorway but diverged from the blue line once the robot's ray sensing no longer detected the doorway.  
            In this case, because the predicted state couldn't track the ground truth, I deduced that the Kalman filter wasn't reliable when faced with environments that contained symmetrical structures.
            
            The third demonstration illustrated the advantage of the Particle filter in overcoming the symmetry challenges that the Kaman filter struggled with. By leveraging a probabilistic representation 
            of the robot's state, the Particle filter successfully localized the robot in the same symmetrical map where the Kalman filter failed. The particles' ability to cluster around the ground truth 
            location upon encountering the off-center doorway showcased the Particle filter's robustness in handling environments with symmetrical features.
            Overall, these experiments highlight that while the Kalman filter is efficient and performs well in less ambiguous environments, the Particle filter is better suited for complex scenarios with high levels of symmetry or uncertainty.
            </p>
        </div>
      </div>

      <h2 className="header-content">Ball-Bot: Self-Balancing Robot</h2>
      <div className="content">
        <div className="image-grid-horizontal">
          <div className="image-wrapper">
            <img src={logo_bb} alt="hi" className="image"/>
            <figcaption class="caption">The Ball-Bot we developed.</figcaption>
          </div>
          <div className="image-wrapper">
            <img src="images/ball-bot-cad.png" alt="hi" className="image"/>
            <figcaption class="caption">CAD image of the Ball-Bot.</figcaption>
          </div>
        </div>
        <div className="text-container">
            <p>The goal of this project was to create a robot that could self balance on top of a basketball.<br></br><br></br>

            My partner and I designed and manufactured custom parts, assembled the robot, and programmed the controller. 
            After using SolidWorks to model the plates and motor mounts, we laser cut the plates and 3D-printed the motor 
            mounts. For the control system, we wrote and tuned several PID controllers to perform several tasks, including 
            balancing and velocity. We used a Raspberry Pi to collect the data from the robot's sensors for further analysis. 
            The Ball-Bot was able to balance steadily for 10 minutes!
            </p>
        </div>
      </div>

    </div>
  );
};

export default Projects;
