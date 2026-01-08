---
title: First Successful Large-Scale Training of a 32-billion Parameter Model
date: 2025-05-13T19:35:00.000+04:00
description: Prime Intellect releases INTELLECT-2
---
INTELLECT-2 now marks the first successful large-scale training of a 32-billion parameter language model using reinforcement learning (RL) in a globally distributed, decentralized network. This is pretty big news and means that we could very well be on track to having a 100-billion parameter model trained in a distributed manner later this year. Some quick thoughts below.

* **Changing the Game:** This is different from how AI models are usually trained, which needs lots of high-performance computing clusters all in one place. As I've mentioned a few times already, the question of how much power demand will come from AI will now be forced to also address questions around the *“distribution”* of that demand.
* **Anyone Can Play:** INTELLECT-2 uses a "swarm" of computers from anyone, anywhere, making AI training more open and accessible.
* **The Brains of the Operation:**The entire system is coordinated by the Prime Intellect Protocol, a decentralized orchestration layer that manages the participation of compute nodes.
* **No Big Data Centers Needed:** This proves you don't need expensive, large-scale data centers to train huge AI models, especially for reasoning.
* **Opening Doors:** This could make it way easier for more people to get into and participate in advanced AI development.
* **Thinking Power:** They're also focused on letting models "think" longer for tricky problems, which works really well in this setup.
* **Making it Work:** Here are the key things that made this possible:
* * **PRIME-RL:** New software for decentralized RL. It lets different parts of the training happen at their own pace.

  * **TOPLOC:** Checks if the calculations from all the different computers are correct.

  * **SHARDCAST:** A library for distributing large files that efficiently gets updated model weights to the decentralized inference workers.

  * **Tweaks:** They also made some important changes to how the RL training works to make it more stable.

The paper released by Prime Intellect with details can be found [here.](https://36889091.streak-link.com/CbHFsF5NzfwIRdpX-QksuNNe/https%3A%2F%2Fstorage.googleapis.com%2Fpublic-technical-paper%2FINTELLECT_2_Technical_Report.pdf)
