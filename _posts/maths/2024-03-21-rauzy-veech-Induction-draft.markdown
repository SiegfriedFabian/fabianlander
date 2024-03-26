---
layout: post
title:  "A soft introduction to interval exchange transformations"
date:   2024-03-21 16:00:00 +0100
categories: dilationsurfaces rauzy-veech-induction
permalink: "/rauzy-veech-induction.html"
---
<!-- <div style="text-align: center;">
    <img src="assets/images/Rauzy-Veech/RV_Teichmflow.png" alt="Alt text" width="600" />
</div> -->

$$ 
\newcommand{\vec}[1]{\mathbf{#1}}
\newcommand{\RR}[1]{\mathbb{R}^{#1}}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\pitop}{\pi^{\text{top}}}
\newcommand{\pibot}{\pi^{\text{bot}}}
\newcommand{\Acal}{\mathcal{A}}
$$


# Introduction

<!-- Let's first have an informal discussion on what Interval Exchange Transformations (IETs) are. Later we will (also with not too much rigour) introduce mathematical notation and objects that describes them. When we talk about an IET, we mean a map from an Intervall $I$ to itself, that takes a finite partition and shuffles it. Here is a picture of an IET where the partition consits of four segments. -->

Let's start with a casual conversation about Interval Exchange Transformations (IETs). Later on, we'll gently delve into the mathematical notation and concepts that describe them—nothing too heavy, just enough to spark our curiosity. When we talk about an IET, we're referring to a map from an interval $I$ to itself that takes a finite partition and gives it a good shuffle. Here's a snapshot of an IET in action, where the partition is made up of four (colored) segments.

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/informalIET.png" alt="Alt text" width="600" />
            <br>
    <span style="font-size: 14px; color: grey;">Cartoon of an IET using four colored segments of different lengths.</span>
</div>

This shuffling is purely about rearranging the pieces using translations -- no flipping or stretching allowed.


<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/flipStretch.png" alt="Alt text" width="600" />
        <br>
    <span style="font-size: 14px; color: grey;">No flips or stretches allowed.</span>
</div>

We can repeatedly apply an IET to the interval. The following picture illustrates that. We name the segments where cut up the interval $A$, $B$, $C$, and $D$ and use the colors to keep track of the initial partition. Note that the initial segments might get cut-up at some point, for instance in the second iteration the blue segment (initially labelled with the letter $A$). It can also happen that a segment merges back together; in the third iteration the blue segment merged together with the previous order (but at a different position). 

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/iterateInformal.png" alt="Alt text" width="400" />
        <br>
    <span style="font-size: 14px; color: grey;"></span>
</div>

Focusing on one point $p$ on the interval, we associate a sequence of letters by remembering the labels it visits. This sequence is called the **symbolic** **orbit** or the **symbolic** **code** or simply **code**.

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/symbolicCodeInformal.png" alt="Alt text" width="400" />
        <br>
    <span style="font-size: 14px; color: grey;">The code of $p$ starts with $CBBA\dots$ .</span>
</div>

And thats where the plot thickens and compelling questions emerge:
- Will there be pieces that find their way back home, staying fixed or eventually returning to their original spot?
- Will the colors blend together?
- Will the code of a point (or even a whole neighborhood) have a certain predictable pattern?

Note that in the example, the rightmost (green) segment gets mapped to itself and has no interesting behaviour, or in other words, it is completely predictable and doesn't interact with the rest. Analysing that IET boils down to ignoring that segments and just focus on the IET with the three segments. Here is another IET that naturally splits into two seperate IETs.

# Defining IETs

The data that fully describe an IET with $d$ segments consits of the (relative) lengths of the segments and a permutation that tells us how to arrange the segments. There are two common ways of encoding this rearangement. Some authors <span style="color: #8B0000;">\[references\]</span> like to use numbers $1,\dots,d$ to label the segments (1 for the leftmost and d for the rightmost segment) and then use permutations $\pi: \\{1, \dots, d\\} \rightarrow \\{1, \dots, d\\}$ to encode the shuffling. Another (very similar) way is to use a set of  $d$ symbols $\Acal$, called **alphabet**, and define two linear orders on $\Acal$ which then define the permutation (in these symbols). We will use the later convention. Lets consider the example similar to the first picture of this post. Say $\lambda = (\lambda_1, \lambda_2)$ have four segments (whatever their lengths might be). Actually we already defined an alphabet for our IET using the letters $A,B,C,D$, so lets take $\Acal := \\{ A,B,C,D\\}$. To change things up lets pick a different initial ordering on $\Acal$ via

$$
\pitop = \begin{pmatrix} B & C & A & D \\ 1 & 2 & 3 & 4  \end{pmatrix} \qquad  \text{ and } \qquad \pibot = \begin{pmatrix} C & A & B & D \\ 1 & 2 & 3 & 4  \end{pmatrix}
$$

So we label the segments from left to right with $B,C,A,D$ and then rearrange them to $C,A,B,D$. Here is a picture where the lengths of the segments are given by $\lambda = (1,\frac{3}{2}, 1, \frac{1}{2}) \in \RR^4_+$, i.e. the first segment has length $1$, the second has length $\frac{3}{2}$, and so on.


<!-- but since we have a clear way of ordering them ($A$ usually goes first, $B$ second, and so on), lets pick a set that doesn't have a (clear) order like $\Acal = \\{ 7, \alpha, X, \text{∞} \\}$. Later we will return to the latin alphabet for brevity. We need to give a labelling for the initial partition and a labelling for the rearranged partitioning forDefining an order on $\Acal$ is giving a map $ \pitop$. -->


<!-- \{ \text{Ada (Lovelace)}, \text{Carl (Gauss)}, \text{Emmy (Noether)}, \text{Leonhard (Euler)} \} -->

# Introduction

Informally, an interval exchange transformation (IET) is a predetermined shuffling of (finitely many) segments in an Interval. We are particularly interested in exploring the dynamical properties that emerge from the repeated application of such transformations.
<!-- #Here some macros -->

## Interval exchange transformations
We label our segments using elements of a set, called alphabet, $\Acal$ with $d > 1$ elements. Let $\lambda = (\lambda_i)_{i\in \mathcal{A}}$ be a vector of positive real numbers describing the lengths of our segments. Consider bijections $\pi^{\text{top}}$ and $\pi^{\text{bot}}$ which will define two orderings of our segments. The permutation $\pi^{\text{top}}$ describes the initial ordering and $\pi^{\text{bot}}$ descibes the ordering afterwards. This data defines a map which we call an Interval Exchange Transformation (IET) denoted by $T_2$, where $\pi$ only contains the combinatorial data of the shuffling, i.e. $\pi =   \pi^{\text{bot}} \circ (\pi^{\text{top}})^{-1}$. We denote by $\alpha_k$ the position of the endpoint of the $k$-th segment, i.e.
 
$$
\alpha_k^\text{top} = \sum_{i:\pi^{\text{top}}(i)\le k} \lambda_i \quad \text{and} \quad \alpha_k^\text{bot} = \sum_{i:\pi^{\text{bot}}(i)\le k} \lambda_i.
$$



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
T_\alpha : [0,
1] &\rightarrow [0,1] \\
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

