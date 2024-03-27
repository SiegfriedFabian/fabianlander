---
layout: post
title:  "A primer on interval exchange transformations"
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

<!-- Let's first have an informal discussion on what Interval Exchange Transformations (IETs) are. Later we will (also with not too much rigour) introduce mathematical notation and objects that describes them. When we talk about an IET, we mean a map from an Interval $I$ to itself, that takes a finite partition and shuffles it. Here is a picture of an IET where the partition consists of four segments. -->

Let's start with a casual conversation about Interval Exchange Transformations (IETs). Later on, we'll gently delve into the mathematical notation and concepts that describe them—nothing too heavy, just enough to spark our curiosity. When we talk about an IET, we're referring to a map from an interval $I$ to itself that takes a finite partition and gives it a good shuffle. Here's a snapshot of an IET in action, where the partition is made up of four (colored) segments.

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/informalIET.png" alt="Alt text" width="600" />
            <br>
    <span style="font-size: 14px; color: grey;">Cartoon of an IET using four colored segments of different lengths.</span>
</div>

This shuffling is purely about rearranging the pieces using translations — no flipping or stretching allowed.


<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/flipStretch.png" alt="Alt text" width="600" />
        <br>
    <span style="font-size: 14px; color: grey;">No flips or stretches allowed.</span>
</div>

We can repeatedly apply an IET to the interval. The following picture illustrates that. We name the segments between the cuts $A$, $B$, $C$, and $D$ and use the colors to keep track of the initial partition. Note that the initial segments might get cut-up at some point, for instance in the second iteration the blue segment (initially labeled with the letter $A$). It can also happen that a segment merges back together; in the third iteration the blue segment merged together with the previous order (but at a different position). 

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

And that's where the plot thickens and compelling questions emerge:
- Will there be pieces that find their way back home, staying fixed or eventually returning to their original spot?
- Will the colors blend together?
- Will the code of a point (or even a whole neighborhood) have a certain predictable pattern?

Note that in the example, the rightmost (green) segment gets mapped to itself and has no interesting behaviour, or in other words, it is completely predictable and doesn't interact with the rest of the interval. Analyzing that IET boils down to ignoring that segment and just focus on the IET with the three segments. Here is another IET that naturally splits into two separate IETs.

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/reducibleInformal.png" alt="Alt text" width="400" />
        <br>
    <span style="font-size: 14px; color: grey;">This IET can be split into two independent IETs.</span>
</div>

# Defining IETs

The data that fully describe an IET with $d$ segments consists of the (relative) lengths of the segments and a permutation that tells us how to arrange the segments. There are two common ways of encoding this rearrangement. Some authors <span style="color: #8B0000;">\[references\]</span> like to use numbers $1,\dots,d$ to label the segments ($1$ for the leftmost and $d$ for the rightmost segment) and then use permutations $\pi: \\{1, \dots, d\\} \rightarrow \\{1, \dots, d\\}$ to encode the shuffling. Another (very similar) way is to use any set $\Acal$ consisting of $d$ symbols, called **alphabet**, and define two linear orders on $\Acal$ which then define the permutation in these symbols. We will use the latter convention. 

Let's consider an example similar to the first picture of this post. Say we have four segments with lengths $\lambda = (\lambda_1, \lambda_2, \lambda_3, \lambda_4)\in \RR^4_+$, i.e. the first segment has length $\lambda_1$, the second has length $\lambda_2$, and so on. Actually, we already used the symbols $A,B,C,D$ for our IET,  so let's take $\Acal := \\{ A,B,C,D\\}$. To change things up let's pick a different ordering on $\Acal$ via

$$
\pitop = \begin{pmatrix} B & C & A & D \\ 1 & 2 & 3 & 4  \end{pmatrix} \qquad  \text{ and } \qquad \pibot = \begin{pmatrix} C & A & B & D \\ 1 & 2 & 3 & 4  \end{pmatrix}
$$

So we label the segments from left to right with $B,C,A,D$ and then rearrange them to $C,A,B,D$. Here is a picture where the lengths of the segments are given by $\lambda = (1,\frac{3}{2}, 1, \frac{1}{2})$. Note that the picture would look qualitatively the same when we multipliy $\lambda$ by any constant greater than $0$. 

<div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
    <img src="assets/images/Rauzy-Veech/codingExample.png" alt="Alt text" width="400" />
        <br>
    <span style="font-size: 14px; color: grey;"> </span>
</div>

The permutation that describes the IET is therefore 

$$
\pi = \pitop \circ (\pibot)^{-1} = \begin{pmatrix} B & C & A & D \\ C & A & B & D  \end{pmatrix}.
$$

We can read this as: segments are initially identified as \(B, C, A, D\) and subsequently rearranged into the order \(C, A, B, D\).

You might wondered where we will cut our partition.







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
