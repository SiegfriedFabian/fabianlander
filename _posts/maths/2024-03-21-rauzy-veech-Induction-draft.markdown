---
layout: post
title:  "Rauzy-Veech Induction"
date:   2024-03-21 16:00:00 +0100
categories: dilationsurfaces rauzy-veech-induction
permalink: "/rauzy-veech-induction.html"
---
# Introduction

Informally, an interval exchange transformation (IET) is a predetermined shuffling of (finitely many) segments in an Interval. We are particularly interested in exploring the dynamical properties that emerge from the repeated application of such transformations.


## Interval exchange transformations
We label our segments using elements of a set, called alphabet, $\mathcal{A}$ with $d > 1$ elements. Let $\lambda = (\lambda_i)_{i\in \mathcal{A} \pi}$ be a vector of positive real numbers describing the lengths of our segments. Consider bijections $\pi^{\text{top}}$ and $\pi^{\text{bot}}$ which will define two orderings of our segments. The permutation $\pi^{\text{top}}$ describes the initial ordering and $\pi^{\text{bot}}$ descibes the ordering afterwards. This data defines a map which we call an Interval Exchange Transformation (IET) denoted by $T_2$, where $\pi$ only contains the combinatorial data of the shuffling, i.e. $\pi =   \pi^{\text{bot}} \circ (\pi^{\text{top}})^{-1}$.

<!-- Identifying the unit circle $S^1$ with $\mathbb{R} / \mathbb{Z}$ we define a rotation of angle $\alpha$ via the map

$$
\begin{align}
T_\alpha: \mathbb{R} / \mathbb{Z} &\rightarrow \mathbb{R} / \mathbb{Z}, \\
x &\mapsto x + \alpha \text{ (mod 1) }
\end{align}
$$ -->

<!-- We define a rotation of angle $\alpha$ by

$$
\begin{aligned}
T_\alpha : [0,1] &\rightarrow [0,1] \\
x &\mapsto 
\begin{cases} 
x + \alpha & \text{if } x < 1 - \alpha, \\
x +\alpha -1 & \text{if } x > 1 - \alpha, \\
\text{undefined} & \text{if } x = 1 - \alpha.
\end{cases} \\ 
\end{aligned}
$$ -->

<!-- $$
\begin{aligned}
T_\alpha : [0,1] &\rightarrow [0,1] \\
x &\mapsto 
\begin{cases} 
x + \alpha & \text{if } x < 1 - \alpha, \\
x +\alpha -1 & \text{if } x > 1 - \alpha, \\
\text{undefined} & \text{if } x = 1 - \alpha.
\end{cases}
\end{aligned}
$$ -->


Given $(\lambda_A, \lambda_B) \in \mathbb{R}_{>0}^2$ we define 


$$
\begin{aligned}
T_\lambda: [0,\lambda_A + \lambda_B] &\rightarrow [0,\lambda_A + \lambda_B] \\
x &\mapsto 
\begin{cases} 
x + \alpha & \text{if } x < 1 - \alpha, \\
x +\alpha -1 & \text{if } x > 1 - \alpha, \\
\text{undefined} & \text{if } x = 1 - \alpha.
\end{cases} \\ 
\end{aligned}
$$

We illustrate this map using two intervals which whe call the top and bot intervals. 

<img src="assets/images/Rauzy-Veech/image.png" alt="Alt text" width="600" />

<img src="assets/images/img.png" alt="Alt text" width="600" />


### Understanding Rotations

Elaborate on the mechanics of rotations. You might want to include mathematical formulas or diagrams here to help explain how rotations work in a more detailed manner.

### Applications of Rotations

Discuss how rotations are applied within the context of IETs and possibly in broader mathematical or real-world scenarios.

## Codings of Rotations

Transition to discussing the codings of rotations. Explain what codings are in this context and how they relate to the study of rotations and IETs.

### Basics of Coding Rotations

Provide an introduction to the basics of coding rotations. This might include definitions, key concepts, and the significance of coding in understanding rotations.

### Examples of Coding Rotations

Offer examples to illustrate how rotations can be coded. Include explanations of these examples to help readers understand the process and its outcomes.

## Suspensions

Introduce the concept of suspensions in the context of IETs and rotations. Explain what suspensions are and their role in the study of dynamical systems.

### Understanding Suspensions

Delve deeper into the concept of suspensions, providing definitions, explanations, and the mathematical underpinnings of the concept.

### Applications and Examples of Suspensions

Discuss how suspensions are applied in the study of IETs and rotations. Provide examples to illustrate these applications, along with explanations to aid comprehension.

# Conclusion

Wrap up your post with a conclusion that summarizes the key points discussed. Reflect on the importance of rotations, codings, and suspensions in the study of IETs and Rauzy-Veech induction. You might also want to hint at future topics or questions that arise from this discussion.

